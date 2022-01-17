export const states = {
    IDLE_LEFT: 0,
    IDLE_RIGHT: 1,
    JUMPING_LEFT: 2,
    JUMPING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT:5
}

class State {
    constructor(state){
        this.state = state;
    }
}
class IdleLeft extends State {
    constructor(player){
        super('IDLE LEFT');
        this.player = player;
    }

    enter(){

    }
    handleInput(input){
        if(input === 'PRESS left') {}
    }
}

class IdleRight extends State {
    constructor(player){
        super('IDLE RIGHT');
        this.player = player;
        }
        enter(){
    
        }
        handleInput(input){
            
        }
}