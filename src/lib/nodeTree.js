export class NodeTree {
    constructor(id, color) {
        this.id = id;
        this.color = color;
        this.leftChild = null;
        this.rightChild = null;
    }

    addChildren(leftId, leftColor, rightId, rightColor) {
        this.leftChild = new NodeTree(leftId, leftColor);
        this.rightChild = new NodeTree(rightId, rightColor);
    }

    findNodeByID(id) {
        if (this.id === id) return this;


        if (this.leftChild !== null) {
            const left = this.leftChild.findNodeByID(id);
            if (left !== null) return left;
        }

        if (this.rightChild !== null) {
            const right = this.rightChild.findNodeByID(id);
            if (right !== null) return right;
        }

        return null;
    }

    findAndAddChildrenById({ id, leftId, leftColor, rightId, rightColor }) {
        const targetNode = this.findNodeByID(id);

        if (targetNode !== null && targetNode instanceof NodeTree) {
            targetNode.addChildren(leftId, leftColor, rightId, rightColor);
            return this;
        }

        return false;
    }

    findAndDeleteNodeByID(id) {
        if (this.leftChild && this.leftChild.id === id) {
            this.leftChild = null;
            return this;
        }

        if (this.rightChild && this.rightChild.id === id) {
            this.rightChild = null;
            return this;
        }

        if (this.leftChild) {
            const leftDeleted = this.leftChild.findAndDeleteNodeByID(id);

            if (leftDeleted) return this;
        }

        if (this.rightChild) {
            const rightDeleted = this.rightChild.findAndDeleteNodeByID(id);

            if (rightDeleted) return this;
        }

        return false;
    };
};