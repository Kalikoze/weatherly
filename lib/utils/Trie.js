class Node {
  constructor(letter) {
    this.letter = letter || null;
    this.isWord = false;
    this.children = {};
    this.selectCount = 0;
    this.timestamp = 0;
  }
}

export default class Trie {
  constructor() {
    this.root = new Node();
    this.counter = 0;
  }

  insert(word) {
    const wordArray = [...word.toLowerCase()];
    let currentNode = this.root;
    for (let i = 0; i < wordArray.length; i += 1) {
      if (currentNode.children[wordArray[i]]) {
        currentNode = currentNode.children[wordArray[i]];
      } else {
        currentNode.children[wordArray[i]] = new Node(wordArray[i]);
        currentNode = currentNode.children[wordArray[i]];
      }
    }
    if (currentNode.isWord === false) {
      this.counter += 1;
      currentNode.isWord = true;
    }
  }

  count() {
    return this.counter;
  }

  suggest(string) {
    const stringArray = [...string];
    let currentNode = this.root;
    const suggestionsArray = [];

    for (let i = 0; i < stringArray.length; i += 1) {
      currentNode = currentNode.children[stringArray[i]];
    }

    const searchTrie = (string, currentNode) => {
      const keys = Object.keys(currentNode.children);
      for (let k = 0; k < keys.length; k += 1) {
        const child = currentNode.children[keys[k]];
        let newString = string + child.letter;
        if (child.isWord) {
          suggestionsArray.push({
            name: newString,
            selectCount: child.selectCount,
            timestamp: child.timestamp,
          });
        }
        searchTrie(newString, child);
      }
    };

    if (currentNode && currentNode.isWord) {
      suggestionsArray.push({
        name: string,
        selectCount: currentNode.selectCount,
        timestamp: currentNode.timestamp,
      });
    }

    if (currentNode) {
      searchTrie(string, currentNode);
    }
    suggestionsArray.sort((a, b) => {
      return b.selectCount - a.selectCount || b.timestamp - a.timestamp;
    });
    return suggestionsArray.map(obj => {
      return obj.name;
    });
  }

  select(word) {
    const wordArray = [...word];
    let currentNode = this.root;
    for (let i = 0; i < wordArray.length; i += 1) {
      currentNode = currentNode.children[wordArray[i]];
    }
    currentNode.selectCount += 1;
    currentNode.timestamp = Date.now();
  }

  sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i += 1) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}
