#!/usr/bin/env bash

set -e

python3.12 -m venv '.venv'

source '.venv/bin/activate'

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade setuptools
python3 -m pip install --upgrade wheel

python3 -m pip install --upgrade --requirement 'requirements.txt'

