import { Carrier } from "./Carrier";
import { F16 } from "./F16";
import { F35 } from "./F35";

let me = new Carrier('Me');

me.add(new F35())
me.add(new F35())
me.add(new F35())
me.add(new F16())
me.add(new F16())

console.log(me)

me.fill();

console.log(me)

let enemy = new Carrier('Enemy');

enemy.add(new F35())
enemy.add(new F16())
enemy.add(new F16())

console.log(enemy)

enemy.fill();

console.log(me.fight())