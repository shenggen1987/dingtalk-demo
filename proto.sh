#!bin/sh
# for file in ./grpc/proto/*
# do
#     if test -f $file
#     then
#         echo $file 是文件
#     fi
#     if test -d $file
#     then
#         echo $file 是目录
#     fi
# done
protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=./bin/grpc_node_plugin ./grpc/protos/hello.proto