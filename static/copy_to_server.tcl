#!/usr/bin/env tclsh8.6

set my_path [ file normalize [ info script ] ]
set dir [ file dirname $my_path ]

proc get_files { dir pattern } {
	set files [ glob -nocomplain -directory $dir $pattern ]
	return $files
}

set files [ get_files $dir "*.js" ]
set outdir [file normalize  "/dewt/static"]
set closdir [file normalize  "$dir/../clos/"]

puts "Minifying Javascript files"

foreach file $files {
	set file_only [ file tail $file ]
	puts -nonewline "$file_only... "
	flush stdout
	exec java -jar $closdir/compiler.jar --js_output_file=$outdir/$file_only $file
	puts "OK"
}


