export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length))
    let i = jmpAmount
    for (; i < breaks.length; i += jmpAmount){
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;
    const iStart = i;
    for (; i < iStart + jmpAmount && i < breaks.length; i++){
        if (breaks[i]){
            return i;
        }
    }
    return -1
}