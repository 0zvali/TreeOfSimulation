addLayer("a", {
    startData() {
        return {
            unlocked: true,
        }
    },
    tabFormat: {
        "Achievements": {
            content: [

                "blank",
                "achievements",
                "blank",
            ],
        },
        "Savebank": {
            content: [
                ["clickables", [1, 2, 3]],
            ],
        },
    },
    clickables: {
        11: {
            title: "Crystals",
            display: "Layer Finished Pre-Experiments",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!")) return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTY5OTAwODY4MDc5MSwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJleHBlcmltZW50cyIsInZlcnNpb24iOiIwLjQuMSIsInRpbWVQbGF5ZWQiOjI4OC4xOTksImtlZXBHb2luZyI6ZmFsc2UsImhhc05hTiI6ZmFsc2UsInBvaW50cyI6IjE3NjczNTYyOTkuNjUxMTc4OCIsInN1YnRhYnMiOnsiY2hhbmdlbG9nLXRhYiI6e30sImEiOnsibWFpblRhYnMiOiJBY2hpZXZlbWVudHMifX0sImxhc3RTYWZlVGFiIjoiYyIsImluZm9ib3hlcyI6eyJFIjp7ImxvcmUiOmZhbHNlfSwiRiI6eyJsb3JlIjpmYWxzZX0sImMiOnsibG9yZSI6ZmFsc2V9fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODIuNDEyMDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM4Mi40MTIwMDAwMDAwMDMxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImNoYW5nZWxvZy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODIuNDEyMDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzgyLjQxMjAwMDAwMDAwMzEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6eyIxMSI6IiIsIjEyIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOlsiMTEiLCIxMiIsIjE0IiwiMTMiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIkUiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjM4Mi40MTIwMDAwMDAwMDMxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6eyIxMSI6MCwiMTIiOjAsIjEzIjowfSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODIuNDEyMDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJ0cmVlLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM4Mi40MTIwMDAwMDAwMDMxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIkYiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjM4Mi40MTIwMDAwMDAwMDMxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjIxMjAzMDYiLCJiZXN0IjoiMzU4MDMwNiIsInRvdGFsIjoiMzkxNTY4NyIsInJlc2V0VGltZSI6MzkuNzkxOTk5OTk5OTk5ODksImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDE0LDE1LDIxLDIyLDIzLDI0LDI1XSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImRldlNwZWVkIjoxfQ==")
            },
            style() {
                return {
                    'background-color': tmp.c.color,
                }
            },
        },
        12: {
            title: "Experiments",
            display: "Layer Finished Pre-Fusions",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!")) return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTY5ODk3OTc1NzEyMSwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJleHBlcmltZW50cyIsInZlcnNpb24iOiIwLjQiLCJ0aW1lUGxheWVkIjoyMzA3LjA0Nzk5OTk5OTk5OTMsImtlZXBHb2luZyI6ZmFsc2UsImhhc05hTiI6ZmFsc2UsInBvaW50cyI6IjcuMzQwMDcwMjk2MzkxMjJlMzAiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJhIjp7Im1haW5UYWJzIjoiQWNoaWV2ZW1lbnRzIn19LCJsYXN0U2FmZVRhYiI6ImMiLCJpbmZvYm94ZXMiOnsiRiI6eyJsb3JlIjpmYWxzZX0sImMiOnsibG9yZSI6ZmFsc2V9LCJFIjp7ImxvcmUiOmZhbHNlfX0sImluZm8tdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjUyMzguMzEyNDk5OTk5NjMzLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIm9wdGlvbnMtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjUyMzguMzEyNDk5OTk5NjMzLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImNoYW5nZWxvZy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoyNTIzOC4zMTI0OTk5OTk2MzMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYSI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjI1MjM4LjMxMjQ5OTk5OTYzMywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTQiLCIxMyIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1Il0sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJibGFuayI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjI1MjM4LjMxMjQ5OTk5OTYzMywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJ0cmVlLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjI1MjM4LjMxMjQ5OTk5OTYzMywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJGIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsImJlc3QiOiIwIiwidG90YWwiOiIwIiwicmVzZXRUaW1lIjoyNTIzOC4zMTI0OTk5OTk2MzMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNi4wMTMwOTM1NjM3Njg0OTZlMzEiLCJiZXN0IjoiNi4wMTMwOTM1NjM3Njg0OTZlMzEiLCJ0b3RhbCI6IjYuMDIzNDQzMDc0MDgzNDY5ZTMxIiwicmVzZXRUaW1lIjoxOTE1LjA5NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMzEiLCIzMiIsIjMzIiwiMzQiLCIzNSIsNDEsNDIsNDMsNDQsNDVdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiRSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNTQ0OTc5MTMxMDIuNDQ3ODgiLCJiZXN0IjoiNTQ0OTc5MTMxMDIuNDQ3ODgiLCJ0b3RhbCI6IjU1MTExMjU4MTM1LjQ0Nzg4IiwicmVzZXRUaW1lIjoxOTE1LjA5NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTUsMTYsMjEsMjIsMjMsMjQsMjUsMjYsMzEsMzIsMzMsMzQsMzVdLCJtaWxlc3RvbmVzIjpbIjExIiwiMTIiLCIxMyIsIjE0Il0sImxhc3RNaWxlc3RvbmUiOiIxNCIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnsiMTEiOjEsIjEyIjoxLCIxMyI6MH0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiZGV2U3BlZWQiOjF9")
            },
            style() {
                return {
                    'background-color': tmp.E.color,
                }
            },
        },
        13: {
            title: "Fusions",
            display: "Layer Finished Pre-Humans",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!")) return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTY5OTE5NTcxMzk3OCwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJleHBlcmltZW50cyIsInZlcnNpb24iOiIwLjVfNCIsInRpbWVQbGF5ZWQiOjc4NzY3LjE1Mzg5Nzg4MDYzLCJrZWVwR29pbmciOnRydWUsImhhc05hTiI6ZmFsc2UsInBvaW50cyI6IjI5ODc0Nzk2LjQzODIwOTIxIiwic3VidGFicyI6eyJjaGFuZ2Vsb2ctdGFiIjp7fSwiYSI6eyJtYWluVGFicyI6IkFjaGlldmVtZW50cyJ9LCJFIjp7Im1haW5UYWJzIjoiQ2hhbGxlbmdlcyJ9fSwibGFzdFNhZmVUYWIiOiJIIiwiaW5mb2JveGVzIjp7IkYiOnsibG9yZSI6dHJ1ZX0sImMiOnsibG9yZSI6ZmFsc2V9LCJFIjp7ImxvcmUiOnRydWV9LCJIIjp7ImxvcmUiOmZhbHNlfX0sImluZm8tdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MTAxNjk4LjQxODM5NzkwODA2LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIm9wdGlvbnMtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MTAxNjk4LjQxODM5NzkwODA2LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImNoYW5nZWxvZy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMDE2OTguNDE4Mzk3OTA4MDYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMDE2OTguNDE4Mzk3OTA4MDYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwidHJlZS10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMDE2OTguNDE4Mzk3OTA4MDYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJlc3QiOiIwIiwidG90YWwiOiIwIiwicmVzZXRUaW1lIjoxNzguNTc4MTgxMDIxNDU5NzMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJFIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjE3OC41NzgxODEwMjE0NTk3MywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnsiMTEiOjAsIjEyIjowLCIyMSI6MH0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiSCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJlc3QiOjAsInRvdGFsIjoiNiIsInJlc2V0VGltZSI6MTc4LjU3ODE4MTAyMTQ1OTczLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIkYiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEzMSIsImJlc3QiOiIxMzEiLCJ0b3RhbCI6IjIzNiIsInJlc2V0VGltZSI6MTc4MC45ODExMDY1MTg5Nzg4LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywxNCwxNSwxNiwyMSwyMl0sIm1pbGVzdG9uZXMiOlsiMTEiLCIxMiIsIjEzIiwiMTQiXSwibGFzdE1pbGVzdG9uZSI6IjE0IiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImEiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMDE2OTguNDE4Mzk3OTA4MDYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6eyIxMSI6IiIsIjEyIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOlsiMTEiLCIxMiIsIjE0IiwiMTMiLCIxNSIsIjE2IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjI2IiwiMzEiLCIzMyIsIjMyIiwiMzQiLCIzNSIsIjM2IiwiNDIiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImRldlNwZWVkIjoxfQ==")
            },
            style() {
                return {
                    'background-color': tmp.F.color,
                }
            },
        },
        21: {
            title: "Humans (Disabled)",
            display: "Layer Finished Pre-Rooms",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!")) return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcwNTkzMzQ5Mjk0Nywibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJleHBlcmltZW50cyIsInZlcnNpb24iOiIzLjAuMGEiLCJ0aW1lUGxheWVkIjozMjA3MjkuNDcxNTkxMzQ5LCJrZWVwR29pbmciOnRydWUsImhhc05hTiI6ZmFsc2UsInBvaW50cyI6IjIuMDczMDIxNDY0ODI2Nzk2ZTI3Iiwic3VidGFicyI6eyJjaGFuZ2Vsb2ctdGFiIjp7fSwiYSI6eyJtYWluVGFicyI6IkFjaGlldmVtZW50cyJ9LCJFIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJIIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJEIjp7Im1haW5UYWJzIjoiRGlzdG9ydGlvbiBSb3dzIDIgJiAzIn19LCJsYXN0U2FmZVRhYiI6Im1DIiwibmV3c1RvdGFsIjoiMCIsImluZm9ib3hlcyI6eyJGIjp7ImxvcmUiOnRydWV9LCJjIjp7ImxvcmUiOmZhbHNlfSwiRSI6eyJsb3JlIjp0cnVlfSwiSCI6eyJsb3JlIjpmYWxzZSwibG9yZTEiOnRydWV9LCJSIjp7ImxvcmUxIjp0cnVlfSwiVyI6eyJsb3JlMSI6dHJ1ZX19LCJpbmZvLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM0MzY2MC43MzYwOTA5MzIwNCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM0MzY2MC43MzYwOTA5MzIwNCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJjaGFuZ2Vsb2ctdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzQzNjYwLjczNjA5MDkzMjA0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImEiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNDM2NjAuNzM2MDkwOTMyMDQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6eyIxMSI6IiIsIjEyIjoiIiwiMTMiOiIiLCIyMSI6IiJ9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbIjExIiwiMTIiLCIxNCIsIjEzIiwiMTUiLCIxNiIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIyNiIsIjMxIiwiMzMiLCIzMiIsIjM0IiwiMzUiLCIzNiIsIjQyIiwiNDEiLCI0MyIsIjQ0IiwiNDUiLCI0NiIsIjUxIiwiNTIiLCI1MyIsIjU0IiwiNTUiLCI1NiJdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJlc3QiOiIwIiwidG90YWwiOiIwIiwicmVzZXRUaW1lIjoxMTIuNzQ5MDAwMDAwMDAwMTEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJGIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjI3NjU5LjQwNjE5OTk4MzE1NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJFIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjExMi43NDkwMDAwMDAwMDAxMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sIkgiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJiZXN0IjoiMCIsInRvdGFsIjoiMCIsInJlc2V0VGltZSI6Mjc2NTkuNDA2MTk5OTgzMTU3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiUiI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJlc3QiOiIwIiwidG90YWwiOiIwIiwicmVzZXRUaW1lIjoyNzY1OS40MDYxOTk5ODMxNTcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiVyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJlc3QiOiIwIiwidG90YWwiOiIwIiwicmVzZXRUaW1lIjoyNzY1OS40MDYxOTk5ODMxNTcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNDM2NjAuNzM2MDkwOTMyMDQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwidHJlZS10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNDM2NjAuNzM2MDkwOTMyMDQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiQ1QiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjIiLCJiZXN0IjoiMiIsInRvdGFsIjoiMiIsInJlc2V0VGltZSI6Mjc2NTkuNDA2MTk5OTgzMTU3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbIjExIiwiMTIiXSwibGFzdE1pbGVzdG9uZSI6IjEyIiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6eyIxMSI6MSwiMTIiOjEsIjIxIjoxLCIyMiI6MX0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiRkwiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJiZXN0IjoiMCIsInRvdGFsIjoiMCIsInJlc2V0VGltZSI6MTEyLjc0OTAwMDAwMDAwMDExLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsiMTEiLCIxMiIsIjEzIiwiMTQiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMjEiLCIyMiIsIjIzIiwiMjQiXSwibWlsZXN0b25lcyI6WyIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIl0sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sIkVYIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjExMi43NDkwMDAwMDAwMDAxMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiXSwibWlsZXN0b25lcyI6WyIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIiwiMTEiLCIxMSIsIjExIl0sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbCwibWlsZXN0b25lUG9wdXBzIjpmYWxzZX0sIlNMIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjExMi43NDkwMDAwMDAwMDAxMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbCwia2VlcCI6dHJ1ZSwibWlsZXN0b25lUG9wdXBzIjpmYWxzZX0sIk8iOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJiZXN0IjoiMCIsInRvdGFsIjoiMCIsInJlc2V0VGltZSI6Mjc2NTkuNDA2MTk5OTgzMTU3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiRCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJlc3QiOiIwIiwidG90YWwiOiIwIiwicmVzZXRUaW1lIjoyNzY1OS40MDYxOTk5ODMxNTcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7IjExIjowLCIxMiI6MH0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsLCJkaXNjb3ZlcnkiOiIwIiwic2VjdXJpdHkiOiIwIiwic2NpZW5jZSI6IjAifSwibUMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEuOTc5OTk3MDUxNDQ5MzY4OGUxNyIsImJlc3QiOiIxLjk3OTk5NzA1MTQ0OTM2ODhlMTciLCJ0b3RhbCI6IjEuOTc5OTk3MDUxNDQ5MzY4OGUxNyIsInJlc2V0VGltZSI6ODcuNTUyMDAwMDAwMDAwMTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiXSwibWlsZXN0b25lcyI6WyIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiLCIxMSIsIjEyIiwiMTMiXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwibUUiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJiZXN0IjoiMCIsInRvdGFsIjoiMCIsInJlc2V0VGltZSI6MTEyLjc0OTAwMDAwMDAwMDExLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6eyIxMSI6IjAiLCIxMiI6IjAiLCIxMyI6IjAiLCIxNCI6IjAifSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwibUgiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjIiLCJiZXN0IjoiMiIsInRvdGFsIjoiNCIsInJlc2V0VGltZSI6MTEyLjc0OTAwMDAwMDAwMDExLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMl0sIm1pbGVzdG9uZXMiOlsiMTEiXSwibGFzdE1pbGVzdG9uZSI6IjExIiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImRldlNwZWVkIjoxfQ==")
            },
            style() {
                return {
                    'background-color': tmp.H.color,
                }
            },
        },
    },

    achievements: {
        rows: 6,
        cols: 6,
        11: {
            name: "The Outbreak",
            done() { return player.points.gte(15) },
            tooltip: "Infect 15 people",
        },
        12: {
            name: "Infected Crystals",
            done() { return player.c.points.gte(20) },
            tooltip: "Get 20 Crystals",
        },
        13: {
            name: "Hurtful Experiments",
            done() { return player.points.gte(20000) },
            tooltip: "Infect 20,000 people",
        },
        14: {
            name: "Crystals are Merging",
            done() { return player.c.points.gte(1000) },
            tooltip: "Get 1,000 Crystals",
        },
        15: {
            name: "Crystals are becoming maniacs",
            done() { return hasUpgrade("c", 31) },
            tooltip: "Get the 'Crystalmania' upgrade",
        },
        16: {
            name: "The First Experiment",
            done() { return player.E.points.gte(1) },
            tooltip: "Get the first experiment",
        },
        21: {
            name: "Somby's Hope",
            done() { return hasUpgrade("E", 15) },
            tooltip: "Get 'Somby' from Experiments",
        },
        22: {
            name: "Experimental Growth",
            done() { return player.E.points.gte(100) },
            tooltip: "Get 100 Experiments on your side.",
        },
        23: {
            name: "Crystal^2",
            done() { return player.c.points.gte(1e20) },
            tooltip: "Achieve 1e20 Crystals.",
        },
        24: {
            name: "Autoduplicate the Experiments",
            done() { return hasMilestone("E", 12) },
            tooltip: "Get the 2nd Experiment Milestone",
        },
        25: {
            name: "Saltiness isn't enough",
            done() { return hasUpgrade("c", 44) },
            tooltip: "Get 'Salt Crystals' from Crystals",
        },
        26: {
            name: "The Beginning of Experimental Life",
            done() { return player.E.points.gte(100000000) },
            tooltip: `
                Get 100,000,000 Experiments<br>
                Reward: 2.5x Infects
                `,
        },
        31: {
            name() { return hasAchievement("a", 31) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> "Vaccines are fake!" - Some Karen</h4>` : "Vaccinations against the Infection" },
            done() { return player.points.gte(1e30) },
            tooltip() { return hasAchievement("a", 31) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> "The 2033 Virus is fake and y'all are just fake fakers" - Some 2033 Karen <br> Get 1e30 Infects normally.<br> Reward: 2.5x Infects & Crystals</h4>` : "Get 1e30 in 'Immunity'" },
        },
        32: {
            name: "Combination",
            done() { return player.F.points.gte(1) },
            tooltip: "Achieve 1 Fusion Point."
        },
        33: {
            name() { return hasAchievement("a", 33) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> He's an experiment.</h4>` : "Wait...isn't he a human?" },
            done() { return hasUpgrade('E', 36) },
            tooltip() { return hasAchievement("a", 33) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> Get the 'Goon' Upgrade<br> Reward: There's no going back.</h4>` : "Get the 'Goon' Upgrade" }
        },
        34: {
            name: "Avali",
            done() { return hasMilestone('F', 11) },
            tooltip: "Get the First Fusion Milestone!"
        },
        35: {
            name: "Fusioning the Fusions!?",
            done() { return hasMilestone('F', 12) },
            tooltip:
                `
                Get the Second Fusion Milestone!
                Reward: 1.333x Experiments
                `
        },
        36: {
            name() { return hasAchievement("a", 35) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> No Challenging Battles</h4>` : "The First Strike" },
            done() { return player.c.points.gte(1e38) },
            tooltip() { return hasAchievement("a", 35) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> You seriously think I'm giving a challenge this early...?<br> Reward: 3x Infects</h4>` : "Complete the first Experiment Challenge and get 1e38 Crystals!" }
        },
        41: {
            name: "That's a lot of Fusions!",
            done() { return player.F.points.gte(500) },
            tooltip:
                `Get 500 Fusions
                Reward: 1.69x Experiments`
        },
        42: {
            name() { return hasAchievement("a", 42) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> The First Human.</h4>` : "The First Kill" },
            done() { return player.H.points.gte(1) },
            tooltip() { return hasAchievement("a", 42) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> The First Human now exists<br> Reward: 2.3333x Fusions.</h4>` : "Get the First Kill" }
        },
        43: {
            name: "Populated Growth",
            done() { return player.H.points.gte(8.15e9) },
            tooltip:
                `Get 8.15 Billion Humans
                Reward: 3x Experiments`
        },
        44: {
            name: "Infects^2",
            done() { return player.points.gte(1e60) },
            tooltip:
                `Get 1e60 Infects
                Reward: 2.66x Humans Effect`
        },
        45: {
            name: "Infected Rooms",
            done() { return player.R.points.gte(1) },
            tooltip:
                `Get 1 Room`
        },
        46: {
            name() { return hasAchievement("a", 46) ? `<h4 style='color: purple; text-shadow: darkred 1.75px 1.75px 10px;'>You've Collapsed the timeline! Skipping ahead 3 years...</h4>` : "Is this the end?" },
            done() { return player.CT.points.gte(1) },
            tooltip() { return hasAchievement("a", 46) ? `<h4 style='color: purple; text-shadow: darkred 1.75px 1.75px 10px;'> Uh oh...You've collapsed the timeline!</h4>` : "Get the 6th Room Upgrade" },
        },
        96: {
            name() { return hasAchievement("a", 96) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'>I Knew you were going to do that.</h4>` : "I knew you were going to do that." },
            done() { return player.devSpeed >= 1.01 },
            tooltip() { return hasAchievement("a", 96) ? `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'> You're going to play fairly!<br>So your Infects & Crystal gain is /e1e30 until you've set your devSpeed back or under 1.<br> You've found a secret achievement that will never go away!</h4>` : "  " },
            unlocked() { return player.devSpeed >= 1.01 || hasAchievement("a", 96) },
        },
        51: {
            name: "Building Floors",
            done() { return player.FL.points.gte(1) },
            unlocked() { return hasAchievement('a', 46) },
            tooltip:
                `Get 1 Floor...`
        },
        52: {
            name: "Exploding Floors?",
            done() { return player.EX.points.gte(1) },
            unlocked() { return hasAchievement('a', 46) },
            tooltip:
                `Get 1 Explosive...`
        },
        53: {
            name() { return hasAchievement("a", 53) ? `<h4 style='color: red; text-shadow: orange 1.75px 1.75px 10px;'>The First Challenge finally exists...</h4>` : "An Challenge?." },
            done() { return hasChallenge('CT', 11) },
            tooltip() { return hasAchievement("a", 53) ? `<h4 style='color: red; text-shadow: orange 1.75px 1.75px 10px;'>Finally...We can finally get stuff done!</h4>` : "Complete the first challenge" },
            unlocked() { return hasAchievement('a', 46) },
        },
        54: {
            name: "Solar System Action",
            done() { return hasChallenge('CT', 12) },
            unlocked() { return hasAchievement('a', 46) },
            tooltip:
                `Complete 'Planetary Length'.`
        },
        55: {
            name: "Universal Collapse",
            done() { return hasChallenge('CT', 21) },
            unlocked() { return hasAchievement('a', 46) },
            tooltip:
                `Complete 'Universal Floors'.`
        },
        56: {
            name: "Contract with the Devil",
            done() { return player.SL.points.gte(1) },
            unlocked() { return hasAchievement('a', 46) },
            tooltip:
                `Get the first soul.`
        },
        61: {
            name: "Challenged Timeline",
            done() { return hasChallenge('CT', 22) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Complete the 1st Soul CT Challenge!`
        },
        62: {
            name: "Locked Souls",
            done() { return hasMilestone('O', 11) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Get 1 Obfuscation!`
        },
        63: {
            name: "Experimental Obsolete",
            done() { return (player.O.unlocked == true) && player.E.points.gte(1) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Experiments are being shown?`
        },
        64: {
            name: "Merging Time",
            done() { return (player.O.unlocked == true) && player.H.points.gte(1) && player.F.points.gte(1) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `The timeline seems to be submerging with all of the previous layers...`
        },
        65: {
            name: "Distorted Appearance",
            done() { return player.D.points.gte(1) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Distort the Obfuscation...`
        },
        66: {
            name: "Another Row?!",
            done() { return player.O.points.gte("1e1500") },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Finish the 1st Bar in Distortion`
        },
        71: {
            name: "Inflated Distortion",
            done() { return player.O.points.gte("1e12000") },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Finish the 2nd Bar in Distortion`
        },
        72: {
            name: "Once you've seen the Weapons, you've seen enough",
            done() { return player.W.points.gte("1e10000") },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Reach the Weapon hardcap`
        },
        73: {
            name: "Not enough Infects",
            done() { return player.points.gte("1e1000000") && player.CT.points.gte(1) && player.D.points.gte(1) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Reach 1e1000000 Infects while in the Submergeance Timeline`
        },
        74: {
            name: "The actual end...",
            done() { return hasUpgrade("D", 45) },
            unlocked() { return hasAchievement('a', 56) },
            tooltip:
                `Get the final upgrade in Distortion`
        },
        75: {
            name: "I thought this was over?",
            done() { return player.points.gte("1ee10") && hasUpgrade("D", 45) },
            unlocked() { return hasAchievement('a', 74) },
            tooltip:
                `The end is near...`
        },
        76: {
            name: "Time to go Meta!",
            done() { return player.CT.points.gte(2) },
            unlocked() { return hasAchievement('a', 75) },
            tooltip:
                `Another timeline lost... time to go... meta...`
        },
        81: {
            name: "Crystals are being metalike!",
            done() { return player.mC.points.gte(150) },
            unlocked() { return hasAchievement('a', 76) },
            tooltip:
                `Ooh! Shiny! Reach 100 Meta-Crystals`
        },
        82: {
            name: "2nd Generation will live forever!",
            done() { return hasUpgrade("mC", 24) },
            unlocked() { return hasAchievement('a', 76) },
            tooltip:
                `Get "Beelusioning Illusion"`
        },
        83: {
            name: "Infection Nerf!",
            done() { return (player.CT.points.gte(2) && player.points.gte(1e10)) },
            unlocked() { return hasAchievement('a', 76) },
            tooltip:
                `Get inflicted with Level 1 Infect Nerf`
        },
        84: {
            name: "Do you see the meta milestones?",
            done() { return hasMilestone("mE", 12) },
            unlocked() { return hasAchievement('a', 76) },
            tooltip:
                `Reach the stars! Get the 2nd Meta-Experiment Milestone`
        },
        85: {
            name: "Almost the end.",
            done() { return hasMilestone("mE", 14) },
            unlocked() { return hasAchievement('a', 76) },
            tooltip:
                `The end is nigh! Get the 7th Meta-Experiment Milestone`
        },
        86: {
            name: "Thanks for playing!",
            done() { return hasMilestone("mE", 17) },
            unlocked() { return hasAchievement('a', 76) },
            tooltip:
                `Get the 7th Meta-Experiment Milestone`
        },
    },
},
)