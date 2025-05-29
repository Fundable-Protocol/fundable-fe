# Contributing to Fundable 🛠️

Thank you for your interest in contributing to **Fundable**! 🎉
Your support is crucial for building a decentralized, community-driven fundraising platform.

---

## 📦 Tech Overview

Fundable Frontend uses:

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Shadcn UI** for accessible components
* **StarkNet.js** for blockchain interactions
* **ESLint** and **Prettier** for code quality

---

## 🧪 Local Setup

1. **Fork** the repo and clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/fundable-fe.git
cd fundable-frontend
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Run the dev server:**

```bash
pnpm dev
```

---

## 📃️ Branching Strategy

* Use feature branches off `dev`.
* Follow a naming convention like:

  * `feat/upload-csv`
  * `fix/ui-button`
  * `docs/update-readme`

```bash
git checkout -b feat/my-feature
```

---

## 🧨 Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and **atomic commits**.

### ✅ Format:

```bash
<type>(scope): short description
```

### Common types:

| Type       | Purpose                          |
| ---------- | -------------------------------- |
| `feat`     | New feature                      |
| `fix`      | Bug fix                          |
| `docs`     | Documentation only               |
| `style`    | Visual changes (no logic change) |
| `refactor` | Code cleanup without feature/fix |
| `test`     | Adding or updating tests         |
| `chore`    | Build tools, CI config, etc.     |

### 🔬 Examples:

```bash
feat(distribution): add weighted split option
fix(csv): handle invalid rows gracefully
docs(contributing): add PR guidelines
style(dropzone): update drag area border
```

> ⚠️ Avoid bundling multiple logical changes in one commit!

---

## ✅ Before Submitting a PR

* [ ] My changes are **atomic** and follow the commit convention
* [ ] I ran `pnpm run lint` and fixed all linting errors
* [ ] I ran `pnpm run format` to apply Prettier formatting
* [ ] My code is type-safe (`tsc` passes)
* [ ] I tested the UI changes (if applicable)
* [ ] I updated docs/comments if necessary
* [ ] I recorded a short **Loom video** showing the feature or fix in action and included the link in the PR description

---

## 🙌 Submitting Your PR

1. Push to your branch:

```bash
git push origin feat/my-feature
```

2. Open a Pull Request to `main`.

3. Add a clear title and description. Include:

   * What was changed
   * Why it was needed
   * Screenshots (if visual)
   * Loom video link (mandatory for feature/UI PRs)

---

## 🢑 Code of Conduct

Please be kind and respectful. We encourage welcoming, inclusive contributions and feedback. Harassment of any kind will not be tolerated.

---

## 💬 Join the Community

Need help or want to chat with contributors?

👉 [Join our Telegram Group](https://t.me/fundable_finance)

---

Thank you for helping build Fundable! 💚
