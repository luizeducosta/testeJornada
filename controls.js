export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    dispatchEvent(){
        document.dispatchEvent(this[event]);
    }
}