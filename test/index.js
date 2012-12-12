
var Progress = require('../');

describe('Progress', function(){
  it('should be initialized with or without `new`', function(){
    var progress = Progress(100);
    progress.should.be.instanceOf(Progress);
  })

  describe('.update(n)', function(){
    it('should update `.progress`', function(){
      var progress = new Progress(100);
      progress.update(10).progress.should.eql(10);
    })

    it('should emit `progress` with `progress` arg', function(){
      var progress = new Progress(100);
      progress.on('progress', function(obj){
        obj.should.be.instanceOf(Progress);
      }).update(10.1);
    })

    it('should emit `progress` with progress info', function(){
      var progress = new Progress(100);
      progress.on('progress', function(obj){
        obj.total.should.eql(100);
        obj.percent.should.eql(70);
        obj.progress.should.eql(70.9);
      }).update(70.9);
    })

    it('should emit `end` when progress ends', function(){
      var progress = new Progress(100);
      progress.on('end', function(obj){
        obj.should.be.instanceOf(Progress);
      }).update(100);
    })
  })
})
