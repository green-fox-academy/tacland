// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
    backgroundColor: string;
    textColor: string;
    text: string;
    static instances: PostIt[] = [];

constructor(bColor: string, content: string, color: string) {
    this.backgroundColor = bColor;
    this.text = content;
    this.textColor = color;
    PostIt.instances.push(this);
  }
}

const orange = new PostIt ('orange', 'blue', 'Idea 1')
const pink = new PostIt ('pink', 'black', 'awesome')
const yellow = new PostIt ('yellow', 'green', 'Superb!')
console.log(orange, pink, yellow)