gitlab-ci-local-pre-commit
==========================
A [pre-commit][PRE_COMMIT] hook to run [gitlab-ci-local][GITLAB_CI_LOCAL].

Usage
-----
Add the hook to your project's `.pre-commit-config.yaml` like so:

```yaml
repos:
  - repo: https://github.com/jbenner-radham/gitlab-ci-local-pre-commit
    rev: v4.59.0
    hooks:
      - id: gitlab-ci-local
```

The above would be equivalent to running the following in the shell:

```shell
gitlab-ci-local
```

If you need to pass custom arguments to [gitlab-ci-local][GITLAB_CI_LOCAL] you can do the following:

```yaml
repos:
  - repo: https://github.com/jbenner-radham/gitlab-ci-local-pre-commit
    rev: v4.59.0
    hooks:
      - id: gitlab-ci-local
        args: [--file, _gitlab-ci.yml] 
```

The above would be equivalent to running the following in the shell:

```shell
gitlab-ci-local --file=_gitlab-ci.yml
```

[GITLAB_CI_LOCAL]: https://github.com/firecow/gitlab-ci-local
[PRE_COMMIT]: https://pre-commit.com/
