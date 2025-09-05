import { StarProps } from '../types/StarProperties';
type Connections = {
    indexA: number;
    indexB: number;
};
export class DisjoinSet {
    parent: Array<number>;
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
    }

    find(index: number) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }

    union(indexA: number, indexB: number) {
        const node1 = this.find(indexA);
        const node2 = this.find(indexB);
        if (node1 !== node2) {
            this.parent[node1] = node2;
        }
    }

    generateGraph(stars: StarProps[]): Connections[] { 
        const resultGraph: Connections[] = [];
        for(let c = 0; c<stars.length - 1; c++){
            const starA = stars[c]; 
            const starB = stars[c+1];

        } 
        return resultGraph;
        
    }
}
