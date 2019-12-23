class postIt {
    public doStuff() {
        this._doSecretStuff()
    }
    private _doSecretStuff() {
        console.log('secret stuff')
    } 
}

const example1 = new postIt()
example1.doStuff()