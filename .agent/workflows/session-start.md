---
description: Initialize AI agent session for AegisQA development
---

# Session Start Checklist

Execute these steps at the beginning of each development session.

## 1. Load Session State

// turbo

```powershell
Get-Content .agent/session-state.json | ConvertFrom-Json
```

## 2. Read Context Documents

Read the following files to understand current state:

- `.agent/session-state.json` — Machine-readable state
- `.agent/session-context.md` — Human-readable context
- `.agent/BACKLOG.md` — Current tasks and priorities
- `.agent/rules.md` — Development guidelines

## 3. Acknowledge Context

Confirm understanding by stating:

- Current sprint and phase
- Last session accomplishments
- Today's priority tasks
- Any open blockers

## 4. Verify Environment

// turbo

```powershell
# Check Docker is running
docker info | Select-Object -First 5

# Check Node.js
node --version

# Check Java
java --version
```

## 5. Begin Work

Proceed with the highest priority task from BACKLOG.md.
