class VendingMachineEvents {
    constructor() {
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector('.bg-box p');
        this.itemList = vMachine.querySelector('.cola-list');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.get-list');

        const myinfo = document.querySelector('.section2');
        this.myMoney = myinfo.querySelector('.bg-box strong');

        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    bindEvent() {
        /**
         * 1. 입금 버튼 기능
         * 입금 버튼을 누르면 1. 소지금 === 소지금 - 입금액
         * 
         * 
         * 
         * 
         * 
         */
    }
}

export default VendingMachineEvents;