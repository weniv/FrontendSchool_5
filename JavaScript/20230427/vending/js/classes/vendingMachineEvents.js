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
         * 입금 버튼을 누르면 
         * 1) 소지금 === 소지금 - 입금액
         * 2) 잔액 === 기존 잔액 + 입금액
         * 3) 입금액이 소지금보다 많으면 경고창 출력
         * 4) 입금액이 정상적으로 입금되면 입금창은 초기화 되야한다.
         */
        this.btnPut.addEventListener('click', () => {
            // 입력값
            const inputCost = parseInt(this.inputCostEl.value);
            // 소지금 
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));

            // 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            if (inputCost) {
                // 입금액이 소지금 보다 적거나 같다면
                if (inputCost <= myMoneyVal && inputCost > 0) {
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';

                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';

                    // 입금액이 소지금보다 많다!
                } else {
                    alert('소지금이 부족합니다.');
                }
                // 입금액 초기화 
                this.inputCostEl.value = "";
            }
        });


        /**
         * 2. 거스름돈 빈환 버튼
         */
    }
}

export default VendingMachineEvents;