{exec} = require 'child_process'

task 'build', 'Build client js', ->
  exec 'coffee -w --compile --output assets/js/ src/coffee/'
  exec 'stylus -w src/stylus --out assets/css'

  # spawn 'coffee', ['-w','--compile','--output','assets/js/','src/coffee/']
  # spawn 'stylus', ['src/stylus','--out','/assets/css']
