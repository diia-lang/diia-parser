#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNested(MavkaParser::NestedContext* context) {
    return _visitContext(context->n_value);
  }
} // namespace mavka::parser