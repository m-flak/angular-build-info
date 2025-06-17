import { promises as fs } from "fs";

const getVersion = async (path?: string): Promise<string | null> => {
    const read = await fs.readFile(
        path || `${process.cwd()}/package.json`,
        { encoding: "utf-8" }
    );

    return JSON.parse(read)?.version || null;
};

export default getVersion;
