import { getAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = async (req, res, next) => {
    try {
        const { userId } = getAuth(req);

        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized - invalid token", message: "Unauthorized - invalid token" });
        }

        // find user in db by clerk Id
        let user = await User.findOne({ clerkId: userId });

        // If user not in MongoDB yet, auto-sync immediately from Clerk
        if (!user) {
            try {
                const clerkUser = await clerkClient.users.getUser(userId);
                const email =
                    clerkUser.emailAddresses?.find((e) => e.id === clerkUser.primaryEmailAddressId)?.emailAddress ||
                    clerkUser.emailAddresses?.[0]?.emailAddress ||
                    "";
                const name =
                    `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() ||
                    clerkUser.username ||
                    "User";
                const profileImage = clerkUser.imageUrl || "";

                user = await User.findOneAndUpdate(
                    { clerkId: userId },
                    { clerkId: userId, email, name, profileImage },
                    { upsert: true, new: true, setDefaultsOnInsert: true }
                );

                await upsertStreamUser({
                    id: user.clerkId.toString(),
                    name: user.name,
                    image: user.profileImage,
                });
            } catch (syncError) {
                console.error("Error auto-syncing Clerk user in protectRoute:", syncError);
                return res.status(404).json({ msg: "User not found", message: "User not found" });
            }
        }

        // attach user to req
        req.user = user;

        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error);
        res.status(500).json({ msg: "Internal Server Error", message: "Internal Server Error" });
    }
};
