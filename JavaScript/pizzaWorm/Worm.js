class Worm {
    constructor() {
        this.wormBody = [new Tile(13, 10), new Tile(13, 11), new Tile(13, 12)];
        // 현재 지렁이의 방향
        this.dir = 'ArrowUp';
        // 다음 지렁이의 방향
        this.dirNext = 'ArrowUp';
    }

    renderWorm() {
        this.wormBody.forEach((item) => {
            item.renderTile();
        });
    }

    // 지렁이의 몸통, 게임 테두리 충돌 체크
    collisionCheck(wormHead) {
        // 테두리에 충돌했는지 체크
        const leftEdge = (wormHead.col === 0);
        const topEdge = (wormHead.row === 0);
        // 타일의 위치 기분점이 왼쪽 상단
        const rightEdge = (wormHead.col === tileWidth - 1);
        const bottomEdge = (wormHead.row === tileHeight - 1);

        const collisionEdge = leftEdge || topEdge || rightEdge || bottomEdge;

        // 몸과 충돌했는지 체크합니다.
        let collisionBody = false;
        this.wormBody.forEach((item) => {
            if (wormHead.collisionCheck(item)) {
                collisionBody = true;
            }
        })

        return collisionEdge || collisionBody
    }


    // 지렁이를 움직이는 함수
    moveWorm() {
        // 지렁이의 현재 머리
        const head = this.wormBody[0];
        // 이동에 따른 지렁이의 새로운 머리
        let newHead;

        // 다음 방향으로 지렁이를 이동시킵니다.
        this.dir = this.dirNext;


        // 이동 방향에 따른 머리 랜더링 위치 설정
        if (this.dir === 'ArrowRight') {
            newHead = new Tile(head.col + 1, head.row);
        } else if (this.dir === 'ArrowDown') {
            newHead = new Tile(head.col, head.row + 1);
        } else if (this.dir === 'ArrowLeft') {
            newHead = new Tile(head.col - 1, head.row);
        } else if (this.dir === 'ArrowUp') {
            newHead = new Tile(head.col, head.row - 1);
        }


        // 머리와 테두리 혹은 몸통이 부딧히면 게임 오버입니다.
        if (this.collisionCheck(newHead)) {
            renderGameOver();
        }


        this.wormBody.unshift(newHead);

        // 지렁이가 피자를 먹었다면
        if (newHead.collisionCheck(pizza.pos)) {
            ctxBg.clearRect(0, 0, cWidth, cHeight);
            pizza.movePizza();
            // 지렁이가 피자를 안먹었다면
        } else {
            this.wormBody.pop();
        }
    }

    // 사용자가 입력한 방향키를 체크해서 지렁이의 다음 이동 방향을 결정합니다.
    checkDirection(dirKey) {
        if (this.dir === 'ArrowRight' && dirKey === "ArrowLeft") {
            return;
        } else if (this.dir === 'ArrowDown' && dirKey === "ArrowUp") {
            return;
        } else if (this.dir === 'ArrowLeft' && dirKey === "ArrowRight") {
            return;
        } else if (this.dir === 'ArrowUp' && dirKey === "ArrowDown") {
            return;
        }
        this.dirNext = dirKey;
    }
}