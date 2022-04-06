import SbImg from "../assets/tokens/SB.png";
import SsbImg from "../assets/tokens/SSB.png";
import CatImg from "../assets/tokens/CAT.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "cat") {
        return toUrl(CatImg);
    }

    if (name === "ssb") {
        return toUrl(SsbImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
