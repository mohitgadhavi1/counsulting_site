## 2026-02-21 - Path Traversal in File Uploads
**Vulnerability:** User-provided filenames were used directly in `path.join` to determine the upload location, allowing attackers to write files outside the intended directory using `../` sequences.
**Learning:** Even with a timestamp prefix, `path.join` can resolve `..` if it's part of a segment (e.g., `123-../../foo.txt` can resolve to a higher directory).
**Prevention:** Always use `path.basename()` on user-provided filenames before using them in filesystem operations to strip directory components.
