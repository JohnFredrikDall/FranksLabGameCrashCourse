 export const states = {
    IDLE_LEFT: 0,
    IDLE_RIGHT: 1,
    RUNNING_LEFT: 2,
    RUNNING_RIGHT:3,
    JUMPING_LEFT: 4,
    JUMPING_RIGHT: 5,
    SITTING_LEFT: 6,
    SITTING_RIGHT: 7
}

class State {
    constructor(state){
        this.state = state;
    }
}
export class IdleLeft extends State {
    constructor(player){
        super('IDLE LEFT');
        this.player = player;
    }

    enter(){
        this.player.frame = 0;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(states.IDLE_RIGHT)
        else if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT)
        else if(input === 'PRESS up') this.player.setState(states.JUMPING_LEFT)
        else if(input === 'PRESS down') this.player.setState(states.SITTING_LEFT)

    }
}

export class IdleRight extends State {
    constructor(player){
        super('IDLE RIGHT');
        this.player = player;
        }
        enter(){
            this.player.frame = 0;
        }
        handleInput(input){
            if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT)
            if(input === 'RELEASE left') this.player.setState(states.IDLE_LEFT)
            if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT)
            if(input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT)
            else if(input === 'PRESS down') this.player.setState(states.SITTING_RIGHT)
        }
}

export class RunningLeft extends State {
    constructor(player){
        super('RUNNING LEFT');
        this.player = player;
        }
        enter(){
            this.player.frame = 0;
        }
        handleInput(input){
            if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT)
            if(input == 'RELEASE left') this.player.setState(states.IDLE_LEFT)
            if(input === 'PRESS up') this.player.setState(states.JUMPING_LEFT)
        }
}

export class RunningRight extends State {
    constructor(player){
        super('RUNNING RIGHT');
        this.player = player;
        }
        enter(){
            this.player.frame = 0;
        }
        handleInput(input){
            if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT)
            else if(input === 'RELEASE right') this.player.setState(states.IDLE_RIGHT)
            else if(input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT)
        
        }
}


export class JumpingLeft extends State {
    constructor(player){
        super('JUMPING LEFT');
        this.player = player;
    }
    enter(){
        
        this.player.frame = 0;
    }
    handleInput(input) {
        if(input === 'PRESS right') this.player.setState(states.JUMPING_RIGHT)
        else if(!this.player.affectedByGravity) this.player.setState(states.IDLE_LEFT)
    }
}

export class JumpingRight extends State {
    constructor(player){
        super('JUMPING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frame = 0;
    }
    handleInput(input) {
        if(input === 'PRESS left') this.player.setState(states.JUMPING_LEFT)
        else if(!this.player.affectedByGravity) this.player.setState(states.IDLE_RIGHT)
    }
}

export class SittingLeft extends State {
    constructor(player){
        super('SITTING LEFT');
        this.player = player;
    }

    enter(){
        this.player.frame = 0;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(states.IDLE_RIGHT)
        else if(input === 'PRESS left') this.player.setState(states.IDLE_LEFT)
        else if(input === 'RELEASE down') this.player.setState(states.IDLE_LEFT)
    }
}

export class SittingRight extends State {
    constructor(player){
        super('SITTING RIGHT');
        this.player = player;
    }

    enter(){
        this.player.frame = 0;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(states.IDLE_RIGHT)
        else if(input === 'PRESS left') this.player.setState(states.IDLE_LEFT)
        else if(input === 'RELEASE down') this.player.setState(states.IDLE_RIGHT)
        
    }
}