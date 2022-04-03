#!/usr/bin/env bash

if [ -z "$WALEED_CONTENT_DIR" ]
then
    echo "Must provide WALEED_CONTENT_DIR in environment" 1>&2
    exit 1
fi

rsync -rv --delete "$WALEED_CONTENT_DIR"/ideas/ ./input/ideas;
rsync -rv --delete "$WALEED_CONTENT_DIR"/pages/ ./input/pages;
rsync -rv --delete "$WALEED_CONTENT_DIR"/posts/ ./input/posts;