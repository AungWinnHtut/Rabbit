var fs = require('fs');

var js = require(__dirname + "/lang/js/js_template.js");
var php = require(__dirname + "/lang/php/php_template.js");
var java = require(__dirname + "/lang/java/java_template.js");
var objc = require(__dirname + "/lang/objc/objc_template.js");
var python = require(__dirname + "/lang/python/python_template.js");
var ruby = require(__dirname + "/lang/ruby/ruby_template.js");
var swift = require(__dirname + "/lang/swift/swift_template.js");
var csharp = require(__dirname + "/lang/csharp/csharp_template.js");

var uni2json = fs.readFileSync(__dirname + "/rule/uni2zg.json");
var zg2uni = fs.readFileSync(__dirname + "/rule/zg2uni.json");

java.compile(uni2json,zg2uni,__dirname + "/output/java/com/comquas/rabbit/Rabbit.java");
js.compile(uni2json,zg2uni,__dirname + "/output/javascript/rabbit.js");
objc.compile(uni2json,zg2uni,__dirname + "/output/objective-c/Rabbit.m");
php.compile(uni2json,zg2uni,__dirname + "/output/php/Rabbit.php");
python.compile(uni2json,zg2uni,__dirname + "/output/python/Rabbit.py");
ruby.compile(uni2json,zg2uni,__dirname + "/output/ruby/Rabbit.rb");
csharp.compile(uni2json,zg2uni,__dirname + "/output/csharp/Rabbit.cs");