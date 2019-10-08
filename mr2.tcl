#!/usr/bin/env tclsh8.6

set build_id [clock format [ clock seconds ] -format "%Y%m%d%H%M"]

set resources [ lindex $argv 0 ]

set my_path [ file normalize [ info script ] ]
set dir [ file dirname $my_path ]



file delete -force /tmp/dewt
file mkdir /tmp/dewt
file mkdir /tmp/dewt/static
file mkdir /tmp/dewt/app
file mkdir /tmp/dewt/app/templates


cd static
puts [ exec ./drnjs ]

cd ../app
puts [ exec ./drnlua ]

cd ..


proc get_files { dir pattern } {
	set files [ glob -nocomplain -directory $dir $pattern ]
	return $files
}

proc copy_files { src dst patterns } {
	foreach ext $patterns {
		set files [ get_files $src *.$ext ]
		foreach file $files {
			set file_only [ file tail $file ]
			file copy -force $file $dst/$file_only
		}
	}
}

copy_files $dir/app /tmp/dewt/app {json lua}
copy_files $dir/app/templates /tmp/dewt/app/templates {el}
file delete /tmp/dewt/app/external_creds.lua


if { $resources != "" } {
	file copy -force $dir/static/fonts /tmp/dewt/static/fonts
	file copy -force $dir/static/images /tmp/dewt/static/images
	file copy -force $dir/static/libs /tmp/dewt/static/libs
	
	copy_files $dir/static /tmp/dewt/static {html css txt png ico json js jpg gif jpeg}
}

file copy -force $dir/emails /tmp/dewt/emails


set f [open /tmp/dewt/app/version.txt wb]
puts $f $build_id
close $f

set jsfiles [ get_files $dir/static "*.js" ]
set outdir [file normalize  "/tmp/dewt/static"]
set closdir [file normalize  "$dir/clos/"]

puts "Minifying Javascript files"

foreach file $jsfiles {
	set file_only [ file tail $file ]
	puts -nonewline "$file_only... "
	flush stdout
	set result [ exec java -jar $closdir/compiler.jar --js_output_file=$outdir/$file_only $file]
	if {$result != "" } {
		puts $result
		exit 1
	}
	puts "OK"
}

set targetjs [ get_files /tmp/dewt/static *.js ]
foreach file $targetjs {
	set tagged [string map [list .js $build_id.js] $file]
	file copy -force $file $tagged	
}

puts "Making zip..."

set prev [pwd]
cd /tmp
puts [ exec zip -r $build_id.zip dewt ]
cd $prev



