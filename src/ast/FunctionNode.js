import ASTNode from "./ASTNode.js";

/**
 * (а, б): а + б
 */
class FunctionNode extends ASTNode {
    /**
     * @param context
     * @param {boolean} async
     * @param {ParamNode[]} params
     * @param {ASTNode[]} body
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     */
    constructor(context, { async, params, body, type }) {
        super(context);

        this.async = async;
        this.params = params || [];
        this.body = body;
        this.type = type;
    }
}

export default FunctionNode;
