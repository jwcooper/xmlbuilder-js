(function() {
  var assert, builder, test, xml;
  xml = '<root>' + '<xmlbuilder for="node-js">' + '<!-- CoffeeScript is awesome. -->' + '<repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>' + '</xmlbuilder>' + '<test escaped="chars &lt;&gt;&apos;&quot;&amp;">complete 100%</test>' + '<cdata><![CDATA[<test att="val">this is a test</test>]]></cdata>' + '</root>';
  builder = require('../src/index.coffee');
  builder.begin('root').ele('xmlbuilder').att('for', 'node-js').com('CoffeeScript is awesome.').ele('repo').att('type', 'git').txt('git://github.com/oozcitak/xmlbuilder-js.git').up().up().ele('test').att('escaped', 'chars <>\'"&').txt('complete 100%').up().ele('cdata').cdata('<test att="val">this is a test</test>');
  assert = require('assert');
  test = builder.toString();
  assert.strictEqual(xml, test);
}).call(this);
