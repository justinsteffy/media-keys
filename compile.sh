#!/bin/bash

SERVER_EXE=${SERVER_EXE:-mediakeys}
LWS_DYNAMIC_LIB_DIR=${LWS_DYNAMIC_LIB_DIR:-/usr/local}

SERVER_SOURCE=mediakeys.m
LWS_INCLUDE_DIR=$LWS_DYNAMIC_LIB_DIR/include
LWS_DYNAMIC_LIB=$LWS_DYNAMIC_LIB_DIR/lib/libwebsockets.dylib

# build libwebsockets if it can't be found
if [ ! -f "$LWS_DYNAMIC_LIB" ]; then
	echo "libwebsockets.dylib was not found in $LWS_DYNAMIC_LIB. Building it."
	mkdir -p build
	cd build
	cmake -DCMAKE_INSTALL_PREFIX:"PATH=$LWS_DYNAMIC_LIB_DIR" ../lib/libwebsockets
	make
	sudo make install
	cd ..
fi

# this is how ObjC is compiled from the command line?
clang -fobjc-arc -framework Cocoa -o "$SERVER_EXE" "$SERVER_SOURCE" -I "$LWS_INCLUDE_DIR" "$LWS_DYNAMIC_LIB"

echo "All done."
