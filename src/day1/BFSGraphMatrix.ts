export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false)
    const prev = new Array(graph.length).fill(-1)

    seen[source] = true
    const q: number[] = []
    q.unshift(source) //add inital node to que

    while (q.length){
        const curr = q.shift() as number 
        if (curr == needle){
            break;
        }

        const adjs = graph[curr] // Get array of connecting nodes
        for(let i = 0; i < graph.length; i++){ //iterate through array of nodes
            if (adjs[i] == 0){ //only check if they acctually connect
                continue
            }
            if (seen[i]){ //only check if nodes haven't already been visited 
                continue
            }
            seen[i] = true
            prev[i] = curr
            q.push(i) //push new node to check onto que
        }
    }

    let curr = needle;
    const out: number[] = []
    while (prev[curr] != -1){ //iterate through the prev array, finding the parent of the found node recurrsively
        out.push(curr)
        curr = prev[curr]
    }
    if (out.length){
        return [source].concat(out.reverse())
    }
    return null
}