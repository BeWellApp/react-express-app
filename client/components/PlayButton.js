import React, { useState, useEffect, useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import sample from '../assets/sounds/bach_gavotte_short.mp3';

export default function PlayButton({ audio = sample }) {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const soundObject = useMemo(() => {
        const as = new Audio.Sound();
        Audio.setAudioModeAsync({playsInSilentModeIOS:true});
        as.setOnPlaybackStatusUpdate(async playbackStatus => {
            if (playbackStatus.didJustFinish) {
                setIsPlaying(false);
                try {
                    await as.stopAsync();
                } catch (error) {
                    console.log('stopping audio failed', error);
                }
            }
        });

        return as;
    }, []);

    const unloadingAudioFile = async () => {
        try {
            await soundObject.unloadAsync();
        } catch (error) {
            console.log('unloading audio file failed', error);
        }
    }

    const handlePlayPressed = async () => {
        setIsPlaying(true);
        try {
            await soundObject.playAsync();
        } catch (error) {
            console.log('playing audio file failed', error);
        }
    }

    const handlePausePressed = async () => {
        setIsPlaying(false);
        try {
            await soundObject.pauseAsync();
        } catch (error) {
            console.log('pausing audio file failed', error);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                setIsPlaying(false)
                await soundObject.loadAsync(audio, {}, false);
            } catch (error) {
                console.log('loading audio file failed', error);
            }
        })()
        
        return () => {
            unloadingAudioFile();
        }
    }, [audio]);

    return (
        isPlaying ?
            <AntDesign name="pausecircle" size={34} color="black" onPress={handlePausePressed} /> :
            <AntDesign name="play" size={34} color="black" onPress={handlePlayPressed} />
    )
}