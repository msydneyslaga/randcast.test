import "dart:html";
import 'dart:collection';
import 'dart:convert';
import 'dart:async';
import "dart:io";
import 'dart:web_audio';
import "package:http/http.dart" as http;
import 'package:profanity_filter/profanity_filter.dart';

import "helpers.dart";
import "catppuccin.dart";

const Map<String, Float> weatherpair =
{
	
};

void forecastbtn_click(Event? e)
{
	print("hi :3");
}

int main()
{
	final Element? forecastbtn = querySelector("#forecastbtn");
	forecastbtn!.onClick.listen(forecastbtn_click);

	return 0;
}

