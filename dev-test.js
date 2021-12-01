const Block=require('./blocks')

const block=new Block('foo','bar','zoo','baz');

console.log(block.toString());

console.log(Block.genesis().toString());

const fooBlock=Block.mineBlock(Block.genesis(),'food');

console.log(fooBlock.toString());