#!/bin/bash
Xvfb :1 -screen 0 $SCREEN &
webdriver-manager start &
protractor $@
