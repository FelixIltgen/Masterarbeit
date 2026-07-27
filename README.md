# Masterthesis
### This is my code repository for my TYPO3 Masterthesis.

This repository contains the practical part of my master's thesis. It includes two TYPO3 websites that were compared with each other in my thesis.
In my master's thesis, I examined the following topic:
> The influence of structured data on source attribution in search results: A study on increasing the visibility of websites in the era of artificial intelligence

and answered the following research question:
> To what extent is structured data gaining strategic importance, and in what form does it influence the source attribution of websites in AI-powered search engines?

### Live website
> You can find the current live version of the website [here](https://www.handgemachtstudio.com/).

Below is the guide for a local DDEV installation.
### Prerequisites
Before you start, make sure the following tools are installed on your system:

- [Docker](https://www.docker.com/) (or Docker Desktop / Orbstack / Colima)
- [DDEV](https://ddev.readthedocs.io/en/stable/#installation) (version 1.22 or newer recommended)
- [Git](https://git-scm.com/)
- [Composer](https://getcomposer.org/) (optional, DDEV already includes Composer)

Check the installation with:

```bash
docker --version
ddev --version
git --version
```
## Windows: Setting up Ubuntu (WSL2)

If you're working on Windows, DDEV should **not run directly on Windows**, but inside **WSL2 (Windows Subsystem for Linux)** with an Ubuntu distribution. This provides significantly better performance and compatibility.

### 1. Install WSL2 and Ubuntu

Open PowerShell **as Administrator** and run:

```powershell
wsl --install -d Ubuntu
```

If WSL is already installed but no Ubuntu distribution exists yet:

```powershell
wsl --install -d Ubuntu
wsl --set-default-version 2
```

Restart your computer afterward if prompted to do so.

### 2. Set up Ubuntu

After the restart, open "Ubuntu" from the Start menu (or run `wsl` in PowerShell) and set a username and password on first launch.

Then check whether WSL2 (not WSL1) is being used:

```powershell
wsl -l -v
```

In the output, the `VERSION` column for `Ubuntu` should show `2`. If not:

```powershell
wsl --set-version Ubuntu 2
```

### 3. Update the Ubuntu system

Inside the Ubuntu shell:

```bash
sudo apt update && sudo apt upgrade -y
```

### 4. Docker Desktop with WSL2 integration

Install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/) and enable integration for your Ubuntu distribution under **Settings → Resources → WSL Integration**.

### 5. Install DDEV inside Ubuntu

In the Ubuntu shell:

```bash
curl -fsSL https://ddev.com/install.sh | bash
```

Verify the installation:

```bash
ddev --version
```

### 6. Important: Keep project files inside Ubuntu

Store your project (the cloned repository) **in the Linux filesystem**, e.g. under `~/projects/`, and not under `/mnt/c/...`. Files on the Windows drive (`/mnt/c/...`) are significantly slower via WSL2 and can cause performance and file-watching issues with DDEV.

```bash
mkdir -p ~/projects
cd ~/projects
```

From here you can continue with the steps described below — all DDEV and Git commands are run inside the Ubuntu shell (or via an editor connected to WSL, such as VS Code with the "Remote - WSL" extension).
## TYPO3 Installation

### 1. Clone the repository

```bash
git clone https://github.com/FelixIltgen/Masterarbeit.git
cd your-folder-name
```

### 2. Configure the DDEV project (if not already set up)

If the repo already contains a `.ddev` configuration, you can skip this step.

```bash
ddev config --project-type=typo3 --docroot=public --php-version=8.3
```

> Adjust `--docroot` and `--php-version` to match your project (e.g. `public` or `web`, depending on the TYPO3 version).

### 3. Start the project

```bash
ddev start
```

This creates and starts the required containers (web server, database, etc.).

### 4. Install dependencies

```bash
ddev composer install
```

### 5. Import the database (if a dump is available)
The corresponding database is available upon request.
```bash
ddev import-db --file=./dump/database.sql.gz
```

If no database is available, you can set up TYPO3 from scratch via the installer (see step 6).

### 6. TYPO3 Setup (only for a fresh installation)

If no database was imported, open the TYPO3 installer in your browser:

```bash
ddev launch /typo3/install.php
```

Follow the installation wizard to set up the database connection and create an administrator account.

### 7. Open the project in your browser

```bash
ddev launch
```
## Further links

- [DDEV documentation](https://ddev.readthedocs.io/)
- [TYPO3 documentation](https://docs.typo3.org/)
- [DDEV TYPO3 quickstart](https://ddev.readthedocs.io/en/stable/users/quickstart/#typo3)

