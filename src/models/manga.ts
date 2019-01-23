import IChapter from "./chapter";

export default interface IManga {
    title: string;
    anotherName: string;
    authors: string[];
    type: string;
    status: string;
    downloaded: string;
    tags: string[];
    translators: string[];
    description: string[];
    chapters: IChapter[];
    url: string;
}
