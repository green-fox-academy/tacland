// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    hunger_value: number = 50; //50 may have to be placed elsewhere
    thirst_value: number = 50;
    
    public eat(): void {
        this.hunger_value -= 1 ;
      }

    public drink(): void {
        this.thirst_value -= 1;
    }

    public play(): void {
        this.hunger_value += 1;
        this.thirst_value += 1;
    }
}

const Animal1 = new Animal ()
