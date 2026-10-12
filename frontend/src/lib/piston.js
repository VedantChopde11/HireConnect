// Code Execution Engine powered by Judge0 CE API
// Fast, reliable, supports C++, JavaScript, Python, Java without authentication errors

const JUDGE0_API = "https://ce.judge0.com";

// Language IDs for Judge0 CE
const LANGUAGE_IDS = {
    javascript: 93, // Node.js 18.15.0
    python: 71,     // Python 3.8.1
    java: 62,       // OpenJDK 13.0.1
    cpp: 54,        // C++ (GCC 9.2.0)
};

// Safe UTF-8 Base64 encoding for browser
function toBase64(str) {
    try {
        return btoa(unescape(encodeURIComponent(str || "")));
    } catch {
        return btoa(str || "");
    }
}

// Safe UTF-8 Base64 decoding for browser
function fromBase64(b64) {
    if (!b64) return "";
    try {
        return decodeURIComponent(escape(atob(b64)));
    } catch {
        try {
            return atob(b64);
        } catch {
            return b64;
        }
    }
}

/**
 * Executes source code in the given language
 * @param {string} language - 'javascript' | 'python' | 'java' | 'cpp'
 * @param {string} code - source code to execute
 * @returns {Promise<{success: boolean, output?: string, error?: string}>}
 */
export const executeCode = async (language, code) => {
    try {
        const languageId = LANGUAGE_IDS[language];
        if (!languageId) {
            return {
                success: false,
                error: `Unsupported language: ${language}`,
            };
        }

        const response = await fetch(`${JUDGE0_API}/submissions?wait=true&base64_encoded=true`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                source_code: toBase64(code),
                language_id: languageId,
            }),
        });

        if (!response.ok) {
            return {
                success: false,
                error: `HTTP error! status: ${response.status}`,
            };
        }

        const data = await response.json();

        const stdout = fromBase64(data.stdout);
        const stderr = fromBase64(data.stderr);
        const compileOutput = fromBase64(data.compile_output);
        const statusDescription = data.status?.description;

        // Check for compilation errors
        if (compileOutput) {
            return {
                success: false,
                output: stdout,
                error: compileOutput,
            };
        }

        // Check for runtime errors
        if (stderr) {
            return {
                success: false,
                output: stdout,
                error: stderr,
            };
        }

        // Check for execution errors (e.g. Time Limit Exceeded, Memory Limit Exceeded)
        if (data.status?.id && data.status.id > 3) {
            return {
                success: false,
                output: stdout,
                error: statusDescription || "Execution error",
            };
        }

        return {
            success: true,
            output: stdout || "No output",
        };
    } catch (error) {
        return {
            success: false,
            error: `Failed to execute code: ${error.message}`,
        };
    }
};