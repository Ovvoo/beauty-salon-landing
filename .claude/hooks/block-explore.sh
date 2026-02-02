#!/bin/bash
# Hook: Block Task tool with subagent_type=Explore
#
# Reads tool input from stdin, checks if it's an Explore agent call
# Exits with non-zero code to block the tool call

# Read input from stdin
INPUT=$(cat)

# Check if this is a Task call with subagent_type=Explore
if echo "$INPUT" | grep -q '"subagent_type"[[:space:]]*:[[:space:]]*"Explore"'; then
  echo "BLOCKED: Task tool с subagent_type=Explore запрещён."
  echo "Используй Glob, Grep, Read напрямую."
  exit 1
fi

# Allow other Task calls
exit 0
