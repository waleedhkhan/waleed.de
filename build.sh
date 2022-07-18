#!/bin/bash
curl -fsSL https://deno.land/x/install/install.sh | sh
export PATH="/opt/buildhome/.deno/bin:$PATH"
deno --version
exit 0