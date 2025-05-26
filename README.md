gitlab-ci-local-pre-commit
==========================
A [pre-commit][PRE_COMMIT] hook to run [gitlab-ci-local][GITLAB_CI_LOCAL].

Usage
-----
Add the hook to your project's `.pre-commit-config.yaml` like so:

```yaml
repos:
  - repo: https://github.com/jbenner-radham/gitlab-ci-local-pre-commit
    rev: v4.60.0
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
    rev: v4.60.0
    hooks:
      - id: gitlab-ci-local
        args: [--file, _gitlab-ci.yml]
```

The above would be equivalent to running the following in the shell:

```shell
gitlab-ci-local --file _gitlab-ci.yml
```

If you want to only run [gitlab-ci-local][GITLAB_CI_LOCAL] when certain files are changed, you can do something like:

```yaml
repos:
  - repo: https://github.com/jbenner-radham/gitlab-ci-local-pre-commit
    rev: v4.60.0
    hooks:
      # Run gitlab-ci-local when our GitLab CI config file or Python files are modified.
      - id: gitlab-ci-local
        files: '^(?:\.gitlab-ci\.yml|.+\.py)$'
```

Non-Usage
---------
If you want to run [gitlab-ci-local][GITLAB_CI_LOCAL] as part of your [pre-commit][PRE_COMMIT] hooks without utilizing this repo, you can use a locally installed version of [gitlab-ci-local][GITLAB_CI_LOCAL] like so:

```yaml
repos:
  - repo: local
    hooks:
      - id: gitlab-ci-local
        name: gitlab ci local
        entry: gitlab-ci-local
        language: system
        pass_filenames: false
        require_serial: true
```

License
-------
This project is licensed under the terms of the MIT License. You can view the full license [here](LICENSE).

[GITLAB_CI_LOCAL]: https://github.com/firecow/gitlab-ci-local
[PRE_COMMIT]: https://pre-commit.com/
