class TrieNode {
    constructor(character) {
        this.character = character;
        this.children = new Array(26).fill(null); // this will be length 26 fro alphabet
        this.endsWord = false;
    }
}

class Trie {

    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        curr = this.root;
        for (let level = 0; level < word.length; level++) {
            let nextChar = word[level];
            let accessIndex = nextChar - 'a';

            if (curr.adjacents[accessIndex] == null) {
                curr.adjacents[accessIndex] = new TrieNode(nextChar);
            }

            curr = curr.adjacents[accessIndex];
        }
        curr.endsWord = true;
    }

    search(word) {
        curr = this.root;

        for (let level = 0; level < word.length; level++) {
            let nextChar = word[level];
            let accessIndex = nextChar - "a";

            if (curr.adjacents[accessIndex] == null) {
                return false;
            }

            curr = curr.adjacents[accessIndex];
        }
        return curr.endsWord;
    }

    startsWith(prefix) {
        curr = this.root;

        for (let level = 0; level < prefix.length; level++) {
            let nextChar = prefix[level];
            let accessIndex = nextChar - "a";

            if (curr.adjacents[accessIndex] == null) {
                return false;
            }

            curr = curr.adjacents[accessIndex];
        }
        return true;
    }
}