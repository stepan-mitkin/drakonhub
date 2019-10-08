#!/usr/bin/tclsh

proc read_file {path} {
	set fp [open $path r]
	set file_data [read $fp]
	close $fp
	return $file_data
}

proc write_file {path data} {
	set fp [open $path w]
	puts $fp $data
	close $fp
}

proc pack_file { modules outname } {
	set lines {}

	lappend lines "\"use strict\";"
	lappend lines "var MegaTree = \{"
	lappend lines "    modules: \{\},"
	lappend lines "    data: \{\}"
	lappend lines "\};"
	lappend lines "\(function\(window, document, megaTree\) \{"

	foreach module $modules {
		set filename [ string tolower $module ]
		set content [ read_file "${filename}.js" ]
		lappend lines $content
		lappend lines "MegaTree.modules.${module} = new ${module}\(megaTree\);"
	}

	foreach module $modules {
		lappend lines "MegaTree.modules.${module}.init();"
	}

	lappend lines "\}\)\(window, document, MegaTree\);"
	
	set output [ join $lines "\n" ]
	write_file $outname $output
}


set modules { file1 file2 }
set outname "editor4.js"
#pack_file $modules $outname
