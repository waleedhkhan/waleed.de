#!/usr/bin/env bash

if [ -z "$WALEED_CONTENT_DIR" ]
then
    echo "Must provide WALEED_CONTENT_DIR in environment" 1>&2
    exit 1
fi

rsync -rv --delete ./input/ideas/ "$WALEED_CONTENT_DIR"/ideas;
rsync -rv --delete ./input/pages/ "$WALEED_CONTENT_DIR"/pages;
rsync -rv --delete ./input/posts/ "$WALEED_CONTENT_DIR"/posts;

