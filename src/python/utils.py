import os
import sys

def get_config():
    return {
        'debug': True,
        'version': '1.0.0'
    }

def validate_input(data):
    return isinstance(data, dict)