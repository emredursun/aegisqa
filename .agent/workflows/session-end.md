---
description: Properly conclude an AegisQA development session
---

# Session End Checklist

Execute these steps before ending each development session.

## 1. Update Session State

Update `.agent/session-state.json` with:

- Increment session ID if ending
- Update last_active timestamp
- Update current phase if changed
- Add any blockers

## 2. Update Session Context

Update `.agent/session-context.md` with:

- Today's accomplishments
- Files created/modified
- Next session priorities
- Any open questions

## 3. Update Backlog

Update `.agent/BACKLOG.md` with:

- Mark completed tasks as ✅ DONE
- Mark in-progress tasks as 🔄 IN PROGRESS
- Add any new tasks discovered

## 4. Update Progress Log

Add a new session entry to `.agent/PROGRESS.md` with:

- Date
- Accomplishments
- Key decisions
- Files created/modified
- Next session priorities

## 5. Git Operations

// turbo

```powershell
# Check git status
git status

# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "Session N: [brief description of accomplishments]"

# Push to remote (if configured)
git push origin main
```

## 6. Final Confirmation

Confirm session end by stating:

- Number of tasks completed
- Current project status
- Ready for next session
