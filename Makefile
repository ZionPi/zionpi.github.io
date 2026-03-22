SHELL := /usr/bin/env bash

RVM_RUBY ?= $(HOME)/.rvm/wrappers/ruby-3.3.6
BUNDLE := $(RVM_RUBY)/bundle
JEKYLL := $(RVM_RUBY)/jekyll

HOST ?= 127.0.0.1
PORT ?= 4000

.PHONY: help install build serve clean doctor

help:
	@printf "Targets:\n"
	@printf "  make install   Install Ruby gems with the configured RVM Ruby\n"
	@printf "  make build     Build the site into _site\n"
	@printf "  make serve     Run local Jekyll server at http://$(HOST):$(PORT)\n"
	@printf "  make clean     Remove generated site output\n"
	@printf "  make doctor    Print Ruby/Jekyll toolchain paths and versions\n"

install:
	"$(BUNDLE)" install

build:
	"$(BUNDLE)" exec jekyll build

serve:
	"$(BUNDLE)" exec jekyll serve --host "$(HOST)" --port "$(PORT)" --livereload

clean:
	rm -rf _site .jekyll-cache .jekyll-metadata

doctor:
	@printf "ruby wrapper: %s\n" "$(RVM_RUBY)"
	@"$(RVM_RUBY)/ruby" -v
	@"$(BUNDLE)" -v
	@"$(JEKYLL)" -v
