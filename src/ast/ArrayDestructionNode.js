import ASTNode from "./ASTNode.js";

/**
 * [а, б, в] = [1, 2, 3]
 */
class ArrayDestructionNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} elements
     */
    constructor(context, { elements }) {
        super(context);

        this.elements = elements || [];
    }
}

export default ArrayDestructionNode;