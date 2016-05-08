<?php
$rawjson = file_get_contents("/status-json.xsl");
$json = json_decode($rawjson, true);
echo $json["icestats"]["source"][1]["title"];
# The $json array structure
/*
array(1) {
	["icestats"]=> array(7) {
		["admin"]=> string(19) "icemaster@localhost"
		["host"]=> string(9) "localhost"
		["location"]=> string(5) "Earth"
		["server_id"]=> string(13) "Icecast 2.4.3"
		["server_start"]=> string(31) "Sat, 07 May 2016 15:30:52 +0200"
		["server_start_iso8601"]=> string(24) "2016-05-07T15:30:52+0200"
		["source"]=> array(2) {
			[0]=> array(21) {
				["audio_bitrate"]=> int()
				["audio_channels"]=> int()
				["audio_info"]=> string() ""
				["audio_samplerate"]=> int()
				["channels"]=> int()
				["genre"]=> string() ""
				["ice-bitrate"]=> int()
				["listener_peak"]=> int()
				["listeners"]=> int()
				["listenurl"]=> string() ""
				["quality"]=> string(3) ""
				["samplerate"]=> int()
				["server_description"]=> string() ""
				["server_name"]=> string() ""
				["server_type"]=> string() ""
				["server_url"]=> string() ""
				["stream_start"]=> string() ""
				["stream_start_iso8601"]=> string() ""
				["subtype"]=> string() ""
				["title"]=> string() ""
				["dummy"]=> 
			}
			[1]=> array(16) {
				["audio_info"]=> string(39) ""
				["bitrate"]=> int()
				["channels"]=> int()
				["genre"]=> string() ""
				["listener_peak"]=> int()
				["listeners"]=> int()
				["listenurl"]=> string() ""
				["samplerate"]=> int()
				["server_description"]=> string() ""
				["server_name"]=> string() ""
				["server_type"]=> string() ""
				["server_url"]=> string() ""
				["stream_start"]=> string() ""
				["stream_start_iso8601"]=> string() ""
				["title"]=> string() ""
				["dummy"]=> 
			}
		}
	}
} 
*/
